

const Marks = ({m1,m2,m3}) => {
  return (
    <div className = "bg-[chartreuse] font-bold text-black rounded-md" >
        <h1 className="bg-[aqua] text-black font-semibold">MarkSheet</h1>
        <h2 className="bg-[blueVoilet]">Sem1:{m1}</h2>
        <h2>Sem2: {m2}</h2>
        <h2>Sem3: {m3}</h2>
    </div>
  )
}

export default Marks