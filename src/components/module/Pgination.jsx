function Pgination({ setPage }) {
  return (
    <div>
      <button onClick={() => setPage(1)}>1</button>
      <button onClick={() => setPage(2)}>2</button>
      <button onClick={() => setPage(3)}>3</button>
    </div>
  );
}

export default Pgination;
