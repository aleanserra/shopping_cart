import { render } from "@testing-library/react";
import Logo from "./Logo";

describe("Logo component", () => {
  it("Renders correctly", () => {
    const { getByText } = render(<Logo />);

    expect(getByText("PRODU")).toBeInTheDocument();
    expect(getByText("CTS")).toBeInTheDocument();
  });

  it("Test click event on logo", () => {
    const mockCallBack = jest.fn();

    // const h2 = shallow((<h2 onClick={mockCallBack}></h2>))
    // h2.find('h2').simulate('click')
    // expect(mockCallBack.mock.calls.length).toEqual(1)
  });
});
