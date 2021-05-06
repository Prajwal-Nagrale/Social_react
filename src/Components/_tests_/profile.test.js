const { render } = require("@testing-library/react");
const { default: ProfileComponent } = require("../profile/ProfileComponent");

describe("Testing", ()=>
{
  it('it is ',()=>{
    const div=document.createElement("div");
    render(<ProfileComponent></ProfileComponent>)
  })
})