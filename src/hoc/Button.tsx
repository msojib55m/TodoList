export default function Button(WrappedComponent: any) {
  return function HOC(props: any) {
    function handleClick() {
      alert("Admin click now " + props.title);
    }

    return <WrappedComponent {...props} handleClick={handleClick} />;
  };
}

