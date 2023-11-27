
import Accordion from "../../Components/Accordion"
// import Chat from "../../Components/ChatPage"


const items = [
  {
     title: "Section 1",
     content: "This is the content of section 1"
  },
  {
     title: "Section 2",
     content: "This is the content of section 2"
  },
  {
     title: "Section 3",
     content: "This is the content of section 3"
  }
]


const LandingPage = () => {
  console.log(items)

  return (
    <>
     {/* <Chat /> */}
      <Accordion items={items}/>
    </>
  )
}

export default LandingPage