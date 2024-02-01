const Loading = ({ data }) => {
  // received data as a props and if the is undefined or null it show a loading state

  if (!data) {
    return <span className="loading loading-dots loading-lg"></span>;
  }
};

export default Loading;
