import * as React from 'react';
import React from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
class App extends React.Component {
  constructor() {
    super();

this.state = {
  sisaUang: 0,
  persentaseUang: 0, 
  pemasukanUang: 0,
  pengeluaranUang: 0,
  transaksiIN: 0,
  transaksiOUT: 0,
  summary: [
    {
      deskripsi:'menerima gaji', 
      tanggal:'1 July 2022', 
      nominal:1000000, 
      category:'IN'
    }, 
    {
      deskripsi:'beli kopi', 
      tanggal:'2 July 2022', 
      nominal:20000, 
      category:'OUT'
    }
  ]
}
}
  render() {
  return (
    <>
    <div className='container py-5'>
      <div className='row'>
        <div className='col-12 text-center'>
      <h1 className='fw-bold'>FEEDUITEN APPS</h1>
      <hr className='w-75 mx-auto'/>
      <h2 className='fw-bold'>Rp.{this.state.sisaUang},-</h2>
      <span className='title-md'>sisa uang kamu tersisa {this.state.persentaseUang}% lagi</span>
      </div>
</div>
      <div className='row mt-4'>
      <div className='col-6'>
      <div className='card-wrapper p-4'>
       <div className='icon-wrapper-in mb-1'>
         <i className="bi bi-wallet2"></i>
         </div>
<span className='title-sm'>pemasukan</span>
<h3 className='fw-bold'>Rp.{this.state.pemasukanUang},-</h3>
<div>
<span className='title-sm text-ungu fw-bold'>50</span>
<span className='title-sm'> transaksi</span>
</div>
</div>
</div>

 <div className='col-6'>
  <div className='card-wrapper p-4'>
    <div className='icon-wrapper-out mb-1'>
      <i className="bi bi-cash-stack"></i>
      </div>
<span  className='title-sm'>pengeluaran</span>
<h3 className='fw-bold'>Rp.{this.state.pengeluaranUang},-</h3>
<div>
<span className='title-sm text-ungu fw-bold'>50</span><span className='title-sm'> transaksi</span>
</div>
</div>
</div>

</div>

<div className='row mt-5'>
  <div className='col-12 d-flex justify-content-between align-items-center'>
    <h4>Ringkasan Transaksi</h4>
    <div className='wrapper-button'>
      <ModalCreate variant="button btn-ungu px-3 py-2 me-2" text="Pemasukan" icon="bi bi-plus-circle-fill"/>
      <ModalCreate variant="button btn-pink px-3 py-2" text="Pengeluaran" icon="bi bi-dash-circle-fill"/>
      </div>
      </div>
      </div>
      <div className='row mt-4'>
        {this.state.summary.map((sum, index) => {
          return (
        <div key='(index)' className='mb-3 col-12 d-flex justify-content-between align-items-center'>
      <div className='d-flex align-items-center'>
        <div className={sum.category === 'IN' ?  'icon-wrapper-in' : 'icon-wrapper-out'}>
          <i className={sum.category === 'IN' ? "bi bi-wallet2" : "bi bi-bag-dash"}></i>
            </div>
    <div className='transaction ms-3 d-flex flex-column'>
      <h6>{sum.deskripsi}</h6>
      <span className='title-sm'>{sum.tanggal}</span>
      </div>
  </div>
      <h5 className={sum.category === 'IN' ?'text-money-In' : 'text-money-Out'}>Rp.{sum.nominal},-</h5>
    </div>
          )   
}) }
      </div>
      </div> 
</>
  )
}
}
class ModalCreate extends React.Component {
  constructor() {
    super();
    this.state = {
      show : false
    }
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }
  handleClose () {
    this.setstate ({
      show : false
    })
  }

  handleShow () {
    this.setstate ({
      show : true
    })
  }

    render () {
      return (
    <>
      <button onClick={this.handleShow} className={this.props.variant}>{this.props.text}<i className={this.props.icon}></i></button>
       <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Pemasukan</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
}
export default App;
Footerimport * as React from 'react';
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
        
        </div
<div className='row mt-5'>
  <div className='col-12 d-flex justify-content-between align-items-center'>
    <h4>Ringkasan Transaksi</h4>
    <div className='wtapper-button'>
      <button className='button btn-ungu px-3 py-2 me-2'>Pemasukan<i class="bi bi-plus-circle-fill"></i></button>
      <button className='button btn-pink px-3 py-2'>Pengeluaran<i class="bi bi-dash-circle-fill"></i></button>
      </div>
      </div>
      </div>

      <div className='row mt-4'>
        {this.state.summary.map{(sum) => {
          return (
        <div className='col-12 d-flex justify-content-between align-items-center'>
      <div className='d-flex align-items-text'>
        <div className={sum.category === 'IN' ?  'icon-wrapper-IN': 'icon-wrapper-OUT'}>
          <i class={sum.category === 'IN' ? "bi bi-wallet2" : "bi bi-bag-dash"}></i>
            </div>
    <div className='transaction ms-3 d-flex flex-column'>
      <h6>{sum.deskripsi}</h6>
      <span className='title-sm'>{sum.tanggal}</span>
      
      </div>
      </div>
      <h5 className='text-money-In'>Rp. {sum.nominal} ,-</h5>
         </div>

      </>
    )
  }
}
export default App;
