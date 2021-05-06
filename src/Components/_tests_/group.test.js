const { render } = require("@testing-library/react");
import GroupsComponent from '../groups/GroupsComponent'

describe("Testing", ()=>
{
  it('it is ',()=>{
    const div=document.createElement("div");
    render(<GroupsComponent></GroupsComponent>)
  })
})