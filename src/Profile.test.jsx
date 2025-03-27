import { render, screen } from "@testing-library/react";
import Profile from "./components/Profile";

// Setup - do something - assert
// test("renders with the correct title", () => {
//   render(
//     <Profile
//       name="Quackie Makers"
//       job="Makers' favourite rubber duck"
//       birthdate={2013}
//     />
//   );

//   expect(
//     screen.getByRole("heading", { name: "Quackie Makers" })
//   ).toBeInTheDocument();
// });

// test("renders with correct job", () => {
//   render(
//     <Profile
//       name="Quackie Makers"
//       job="Makers' favourite rubber duck"
//       birthdate={2013}
//     />
//   );
//   expect(screen.getByTestId("job")).toHaveTextContent(
//     "Makers' favourite rubber duck"
//   );
// });

// test("renders with correct birthdate", () => {
//   render(
//     <Profile
//       name="Quackie Makers"
//       job="Makers' favourite rubber duck"
//       birthdate="2013"
//     />
//   );
//   expect(screen.getByText("2013")).toBeInTheDocument();
// });

// ? Using Jest's beforeEach() to reduce render duplication
describe("Profile component", () => {
  beforeEach(() => {
    render(
      <Profile
        name="Quackie Makers"
        job="Makers' favourite rubber duck"
        birthdate="2013"
      />
    );
  });

  test("renders with the correct title", () => {
    expect(
      screen.getByRole("heading", { name: "Quackie Makers" })
    ).toBeInTheDocument();
  });

  test("renders with correct job", () => {
    expect(screen.getByTestId("job")).toHaveTextContent(
      "Makers' favourite rubber duck"
    );
  });

  test("renders with correct birthdate", () => {
    expect(screen.getByText("2013")).toBeInTheDocument();
  });
});
