import axios from 'axios';

export const submitApi = ({ nodes, edges }) => {
  return axios.post('http://127.0.0.1:8000/pipelines/parse', {
    nodes,
    edges
  });
};
