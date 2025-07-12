import React from 'react';
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { useStore } from './store';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {submitApi} from '././api';
import { SubmitButton } from './submit';
import { ResetButton } from './ResetButton';
function App() {
  const { nodes, edges ,resetPipeline} = useStore();

const handleReset = () => {
  console.log("Reset clicked");
  resetPipeline();
  toast.info("Pipeline reset successfully!");
};

  const handleSubmit = async () => {
    console.log("Submit clicked");

    try {
     const response = await submitApi({ nodes, edges });


      const data = response.data;

      toast.success(` Pipeline Stats:
Nodes: ${data.num_nodes}
Edges: ${data.num_edges}
Is DAG: ${data.is_dag ? 'Yes' : 'No'}`);
    } catch (error) {
 console.error('Error submitting pipeline:', error);
  const errorMessage =
    error.response?.data?.detail || 'Failed to submit pipeline';
  toast.error(`Warning: ${errorMessage}`);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden', backgroundColor: 'rgb(15 23 42)' }}>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '12px 20px',
        backgroundColor: 'rgb(31 41 55)',
        color: 'white',
        alignItems: 'center',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>Pipeline Dashboard</h1>
        <div style={{ display: 'flex', gap: '10px' }}>
  <ResetButton onClick={handleReset} />
  <SubmitButton onClick={handleSubmit} />
</div>

      </div>

      <div style={{ display: 'flex', flexGrow: 1 }}>
        <PipelineToolbar />
        <div style={{ flexGrow: 1, position: 'relative' }}>
          <PipelineUI />
        </div>
      </div>


      <ToastContainer position="top-center" autoClose={5000} />
    </div>
  );
}

export default App;
