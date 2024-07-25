import { ContactTable } from "~/app/admin/contacts/_components/contact-table";

export default function ContactsPage() {
  return (
    <>
      <section className="flex py-4">
        <div className="w-full px-12">
          <div className="mb-4 text-center text-[3rem] dark:text-gray">
            Contacts
          </div>
          <ContactTable />
        </div>
      </section>
    </>
  );
}
