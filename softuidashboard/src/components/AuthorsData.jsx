import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const AuthorsData = () => {
  const authors = useSelector((state) => {
    console.log(state.authors);
    return state.authors;
  });

  const router =  useRouter()

  const handleEdit = (index) => {
    router.push(`/updateauthor/${index}`)
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Authors Table</h2>
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="py-2 px-4 ">Author</th>
            <th className="py-2 px-4 ">Function</th>
            <th className="py-2 px-4 ">Status</th>
            <th className="py-2 px-4 ">Employed</th>
            <th className="py-2 px-4 ">Action</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author, index) => (
            <tr key={index} className="text-left border-b border-b-gray-300">
              <td className="py-2 px-4 flex items-center gap-3">
                <Image src={author.image} alt={author.name} height={35} width={35} />

                <div>
                  <h1 className="font-semibold">{author.name}</h1>
                  <h1 className="text-sm text-gray-500">{author.email}</h1>
                </div>
              </td>
              <td className="py-2 px-4">
                {author.function} <br />
                <span className="text-sm text-gray-500">
                  {author.department}
                </span>
              </td>
              <td className="py-2 px-4">
                <div
                  className={`px-2 py-1 rounded-md text-white text-sm w-20 flex justify-center ${
                    author.status === "ONLINE" ? "bg-green-500" : "bg-gray-400"
                  }`}
                >
                  {author.status}
                </div>
              </td>
              <td className="py-2 px-4 ">{author.employed}</td>
              <td
                className="py-2 px-4  text-blue-500 cursor-pointer"
                onClick={() => handleEdit(index)}
              >
                Edit
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuthorsData;
