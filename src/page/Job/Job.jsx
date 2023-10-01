import po_img from "/Assets/po.svg"
import roadmap from "/Assets/roadmap.svg"
import repic1 from "/Assets/relevant_pic1.svg"
import repic2 from "/Assets/relevant_pic2.svg"
import repic3 from "/Assets/relevant_pic3.svg"
import b1 from "/Assets/brand-1.svg"
import b2 from "/Assets/brand-2.svg"
import b3 from "/Assets/brand-3.svg"
import b4 from "/Assets/brand-4.svg"
import style from "./Job.module.css"
import { Button } from "react-bootstrap"

const Job = () => {
    return <div>
        <h1 style={{ fontSize: "42px", fontWeight: "700" }}>Product Owner</h1>
        <div style={{ display: "flex", textAlign: "start" }}>
            <figure>
                <img src={po_img} style={{ width: "450px" }} />
                <figcaption style={{ maxWidth: "450px", paddingRight: "20px" }}>
                    <ul>
                        <li style={{ wordWrap: "break-word" }}>Thị trường việc làm cho Project Owner chiếm 20% tổng thị trường trường</li>
                        <li>Mức lương trung bình giao động từ 900$-4500$</li>
                    </ul>
                </figcaption>
            </figure>
            <div>

            </div>
        </div>
        <p className={style.title}>Lộ trình nghề nghiệp</p>
        <img src={roadmap} width={"90%"} />
        <p className={style.title}>Case Study của doanh nghiệp</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <img src={b1} width={"20%"} />
            <img src={b2} width={"20%"} />
            <img src={b3} width={"20%"} />
            <img src={b4} width={"20%"} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "80px" }}>
            <img src={b1} width={"20%"} />
            <img src={b2} width={"20%"} />
            <img src={b3} width={"20%"} />
            <img src={b4} width={"20%"} />
        </div>
        <p className={style.title}>Nội dung liên quan về ngành</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ textAlign: "start" }}>
                <img src={repic1} width={"85%"} />
                <figcaption style={{ maxWidth: "350px", paddingRight: "20px" }}>
                    <p className={style.cap}>Những milestone cần lưu ý đối với Product Owner</p>
                    <a style={{ textDecoration: "underline", marginTop: "0" }}>Tìm hiểu thêm</a>
                </figcaption>
            </div>
            <div style={{ textAlign: "start" }}>
                <img src={repic2} width={"85%"} />
                <figcaption style={{ maxWidth: "350px", paddingRight: "20px" }}>
                    <p className={style.cap}>Phương pháp quản lý change management</p>
                    <a style={{ textDecoration: "underline", marginTop: "0" }}>Tìm hiểu thêm</a>
                </figcaption>
            </div>
            <div style={{ textAlign: "start" }}>
                <img src={repic3} width={"85%"} />
                <figcaption style={{ maxWidth: "350px", paddingRight: "20px" }}>
                    <p className={style.cap}>Thời điểm nào làm plan là hợp lý?</p>
                    <a style={{ textDecoration: "underline", marginTop: "0" }}>Tìm hiểu thêm</a>
                </figcaption>
            </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "40px"}}>
            <div style={{ textAlign: "start" }}>
                <img src={repic1} width={"85%"} />
                <figcaption style={{ maxWidth: "350px", paddingRight: "20px" }}>
                    <p className={style.cap}>Những milestone cần lưu ý đối với Product Owner</p>
                    <a style={{ textDecoration: "underline", marginTop: "0" }}>Tìm hiểu thêm</a>
                </figcaption>
            </div>
            <div style={{ textAlign: "start" }}>
                <img src={repic2} width={"85%"} />
                <figcaption style={{ maxWidth: "350px", paddingRight: "20px" }}>
                    <p className={style.cap}>Phương pháp quản lý change management</p>
                    <a style={{ textDecoration: "underline", marginTop: "0" }}>Tìm hiểu thêm</a>
                </figcaption>
            </div>
            <div style={{ textAlign: "start" }}>
                <img src={repic3} width={"85%"} />
                <figcaption style={{ maxWidth: "350px", paddingRight: "20px" }}>
                    <p className={style.cap}>Thời điểm nào làm plan là hợp lý?</p>
                    <a style={{ textDecoration: "underline", marginTop: "0" }}>Tìm hiểu thêm</a>
                </figcaption>
            </div>
        </div>
        <div className={style.container}>
            <p style={{fontSize: "28px", fontWeight: "700", position: "absolute", top: "70px", left: "60px"}}>Có câu hỏi về Case Study?</p>
            <p style={{fontSize: "20px", color: "gray", position: "absolute", top: "110px", left: "60px"}}>Nếu bạn có câu hỏi gì về lộ trình học, chúng tôi</p>
            <p style={{fontSize: "20px", color: "gray", position: "absolute", top: "140px", left: "60px"}}>luôn sẵn sàng trả lời bạn!</p>
            <Button variant="primary" style={{position: "absolute", top: "120px", left: "590px"}}>Chia sẻ ý tưởng</Button>
        </div>
    </div>
}

export default Job;
