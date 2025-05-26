import UpdateAuthorForm from "@/components/UpdateAuthorForm"


const page = ({params}) => {
    const {index} = params
  return (
    <div>
      <UpdateAuthorForm index={index} />
    </div>
  )
}

export default page
