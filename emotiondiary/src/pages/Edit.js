import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {

    const navigate = useNavigate();

    const [searchParamas, setSearchParams] = useSearchParams();
    const id = searchParamas.get("id");
    console.log(id);

    const mode = searchParamas.get("mode");
    console.log(mode);

    return (
        <div>
            <h1>Edit</h1>
            <p>이곳은 일치 수정 페이지 입니다</p>
            <button onClick={() => setSearchParams({who: "youngchulshin"})}>QS 바꾸기</button>

            <button onClick={() => navigate("/HOME")}>HOME으로 가기</button>
            <button onClick={() => navigate(-1)}>뒤로 가기</button>
            
        </div>
    
    );
}

export default Edit;