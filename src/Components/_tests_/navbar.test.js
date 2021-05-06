const { render } = require("@testing-library/react");
const { default: NavbarComponent } = require("../navbar/NavbarComponent");

describe("Testing", ()=>
{
  it('it is ',()=>{
    const div=document.createElement("div");
    render(<NavbarComponent></NavbarComponent>)
  })
})