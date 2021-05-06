const { render } = require("@testing-library/react");
const { default: PhotoComponent } = require("../photos/PhotoComponent");

describe("Testing", ()=>
{
  it('it is ',()=>{
    const div=document.createElement("div");
    render(<PhotoComponent></PhotoComponent>)
  })
})