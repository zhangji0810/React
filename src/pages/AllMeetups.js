import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is the first meetup",
    image:
      "https://images.unsplash.com/photo-1615561077170-a23391d86636?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80",
    address: "Meetupstreet 5, 12312 Meetup City",
    description: "A beautiful asian woman.",
  },
  {
    id: "m2",
    title: "This is the second meetup",
    image:
      "https://images.unsplash.com/photo-1618326848760-b24e62160b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
    address: "Meetupstreet 7, 11232 Meetup City",
    description: "A person in the nature.",
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetupsPage;
