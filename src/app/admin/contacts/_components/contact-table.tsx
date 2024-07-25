"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { api } from "~/trpc/react";

export function ContactTable() {
  const getContactsQuery = api.contact.getAll.useQuery();
  const contacts = getContactsQuery.data;

  return (
    <>
      <Table>
        <TableCaption>
          A list of persons who wants to get in touch with you
        </TableCaption>
        <TableHeader>
          <TableRow className="dark:text-gray">
            <TableHead className="w-[20%]">Date</TableHead>
            <TableHead className="w-[20%]">Name</TableHead>
            <TableHead className="w-[20%]">Email</TableHead>
            <TableHead className="w-[40%]">Message</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts?.length ? (
            contacts?.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell>
                  {contact.date.toISOString().split("T")[0]}
                </TableCell>
                <TableCell>{contact.name}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.message}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow className="text-center">
              <TableCell colSpan={4}>There are currently no message.</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
