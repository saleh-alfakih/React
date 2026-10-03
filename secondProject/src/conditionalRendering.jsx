// import PropTypes from "prop-types";
// conditional rendring = allows you to (show, hide, or change) components
//                          based on conditions

export default function ConditionalRendering({
  loggedIn = false,
  username = "Gest",
}) {
  return loggedIn ? (
    <h2>welcome {username}.</h2>
  ) : (
    <h2>you are not logged in.</h2>
  );
}
// React 19 removed PropTypes validation entirely
// ConditionalRendering.propTypes = {
//   loggedIn: PropTypes.string,
//   username: PropTypes.string,
// };
