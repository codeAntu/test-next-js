export default function ProfilePage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-5 items-center pt-10">
      <h1>
        Profile
        <span className=" bg-red-600 rounded-md ml-2 p-1">{params.id}</span>
      </h1>
      <p>View your profile</p>
    </div>
  );
}
