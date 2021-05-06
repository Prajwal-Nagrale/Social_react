const { render } = require("@testing-library/react");
const { default: MemberComponent } = require("../members/MemberComponent");

describe("Testing", ()=>
{
  it('it is ',()=>{
    const div=document.createElement("div");
    render(<MemberComponent></MemberComponent>)
  })
})