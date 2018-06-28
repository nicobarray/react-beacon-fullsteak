const React = require("react");

export default function(props) {
  const { className, ...rest } = props;
  return (
    <div className={className} {...rest}>
      {"🍔"}
    </div>
  );
}
