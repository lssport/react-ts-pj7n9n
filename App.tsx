import * as React from 'react';
import './style.css';

class App extends React.Component {
  constructor() {
    super();

  }
  render(){
    return (
      <>
<div className='container py-5'>
 <div className='row'>
  <div className='col-12 text-center'>
   <h1 className='fw-bold'>FEEDUITEN APPS</h1>
    <hr className='w-75 mx-auto'/>
     <h2 className='fw-bold'>Rp.1.500.000,-</h2>
      <span className='title-md'>sisa uang kamu tersisa 75% lagi</span>
       </div>
        </div>
<div className='row mt-4'>
  <div className='col-6'>
    <div classMame='card-wrapper p-4'>
      <div className='icon-wrapper mb-1'>
        <i class="bi bi-wallet2"></i>
         </div>
  <span className='title-sm'>Pemasukan</span>
   <h3 className='fw-bold'>Rp.2.000.000,-</h3>
    <span className='title-sm text-ungu fw-bold'>50</span><span className='title-sm'> transaksi</span>
    </div>
    </div>
    </div>
  
  <div className='col-6'>
     <div classMame='card-wrapper p-4'>
      <div className='icon-wrapper mb-1'>
        <i class="bi bi-wallet2"></i>
         </div>
 <span className='title-sm'>Pengeluaran</span>
   <h3 className='fw-bold'>Rp.1.500.000,-</h3>
    <span className='title-sm text-ungu fw-bold'>50</span><span className='title-sm'> transaksi</span>
        </div>
        </div>
        </div>
        
        
        

      </>
    )
  }
}
export default App;