const Loading = ({ data }) => {
  if (!data) {
    return <span className="loading loading-dots loading-lg"></span>;
  }
};

export default Loading;
