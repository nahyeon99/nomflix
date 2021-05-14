import React from "react";
import DetailPresenter from "./DetailPresenter";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state = {
    result: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;

    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
  }

  render() {
    const { result, loading, error } = this.state;
    return <DetailPresenter result={result} loading={loading} error={error} />;
  }
}
