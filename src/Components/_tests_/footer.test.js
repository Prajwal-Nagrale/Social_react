const { render } = require("@testing-library/react");
const { default:FooterComponent  } = require("../footers/FooterComponent");

describe("Testing", ()=>
{
  it('it is ',()=>{
    const div=document.createElement("div");
    render(<FooterComponent></FooterComponent>)
  })
})