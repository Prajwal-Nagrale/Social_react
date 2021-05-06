const { render } = require("@testing-library/react");
const { default: LoginComponent } = require("../login/LoginComponent");

describe("Testing", ()=>
{
  it('it is ',()=>{
    const div=document.createElement("div");
    render(<LoginComponent></LoginComponent>)
  })
})