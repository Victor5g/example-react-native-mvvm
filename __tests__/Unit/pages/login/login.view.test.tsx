import renderer from "react-test-renderer";
import { LoginViewModel } from "../../../../src/pages/login/model";
import LoginView from "../../../../src/pages/login/view";

//Mock Hook-Use
jest.mock("../../../../src/pages/login/view.model", () => {
  const fnLoginViewModel = jest.fn();
  fnLoginViewModel.mockImplementation(
    () =>
      ({
        email: "",
        password: "",
        isLoading: false,
        setEmail: jest.fn(),
        setPassword: jest.fn(),
        onSubmit: jest.fn(),
      } as LoginViewModel)
  );

  return fnLoginViewModel;
});

import useLoginViewModel from "../../../../src/pages/login/view.model";

describe("Unit-Test: <LoginView/>", () => {
  it("Renders correctly", () => {
    const { toJSON } = renderer.create(<LoginView />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("Show correctly with E-mail", () => {
    useLoginViewModel.mockImplementation(
      () =>
        ({
          email: "test-jest@unit.com",
          password: "",
          isLoading: false,
          setEmail: jest.fn(),
          setPassword: jest.fn(),
          onSubmit: jest.fn(),
        } as LoginViewModel)
    );
    const { toJSON } = renderer.create(<LoginView />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("Show correctly with Password", () => {
    useLoginViewModel.mockImplementation(
      () =>
        ({
          email: "",
          password: "jest@345.98",
          isLoading: false,
          setEmail: jest.fn(),
          setPassword: jest.fn(),
          onSubmit: jest.fn(),
        } as LoginViewModel)
    );
    const { toJSON } = renderer.create(<LoginView />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("Show correctly with E-mail and Password", () => {
    useLoginViewModel.mockImplementation(
      () =>
        ({
          email: "test-jest@unit.com",
          password: "jest@345.98",
          isLoading: false,
          setEmail: jest.fn(),
          setPassword: jest.fn(),
          onSubmit: jest.fn(),
        } as LoginViewModel)
    );
    const { toJSON } = renderer.create(<LoginView />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("Show correctly while is Loading", () => {
    useLoginViewModel.mockImplementation(
      () =>
        ({
          email: "test-jest@unit.com",
          password: "jest@345.98",
          isLoading: true,
          setEmail: jest.fn(),
          setPassword: jest.fn(),
          onSubmit: jest.fn(),
        } as LoginViewModel)
    );
    const { toJSON } = renderer.create(<LoginView />);
    expect(toJSON()).toMatchSnapshot();
  });
});
