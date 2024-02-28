function Bottom({ type, children }) {
  return (
    <button
      className=" bg-skin-fill   p-2 rounded-md border hover:bg-skin-button-accent-hover"
      type={type}
    >
      {children}
    </button>
  );
}

export default Bottom;
