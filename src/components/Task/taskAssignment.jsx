import React from "react";
import "./index.css"
import { MdAddTask } from "react-icons/md"
const workerData = [
    {
        userName: "Trong Hieu",
        userTitle: "Worker",
        userAvt: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/273478257_1291705351356294_4541559117734448310_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5-6-MGAVbaYAX86tUdl&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfCrfhH8O6jalVdTj9ERblyOvBoelZfXQgevhywPsjJBAA&oe=6420DBC8",
    },
    {
        userName: "Nhat Khang",
        userTitle: "Worker",
        userAvt: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/296910304_3376011002622783_1623232303844231252_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=b4Kkrn5qgKIAX9vcg50&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfCLcvVagujZ1S5SyEFyOcK-ZqFeiEAkjbaU5lKEeQA3cw&oe=64220C79",
    },
    {
        userName: "Duc Hai",
        userTitle: "Worker",
        userAvt: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t1.6435-9/106509798_2721456038091583_4230355345151193495_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=u32gj3Aq5t8AX9TZNyz&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfBzwkXV17BxJVnfCOTiWOf3qr04mgyrcL6-49OA1SbiKw&oe=6443F14E"
    },
    {
        userName: "Mai Phuong",
        userTitle: "Worker",
        userAvt: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/325760923_575757253951348_2183855455904645228_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=P4lC907NT-IAX89Maio&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfDZrFxGpOApx9wAHp6seISCZRc4vHL_qDNjSfln86hn2g&oe=6421D9F9"
    },
    {
        userName: "Van Tung",
        userTitle: "Worker",
        userAvt: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/51979987_341568413128282_5470888801448493056_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=GJ-ctKSPyCgAX-tO0tS&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfCC5dCfYD3VCxC0Eb67ro5cJMFhp2JF8kilJWyCdKZIYA&oe=6443EF2C"
    },
    {
        userName: "Trong Hieu",
        userTitle: "Worker",
        userAvt: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/273478257_1291705351356294_4541559117734448310_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5-6-MGAVbaYAX86tUdl&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfCrfhH8O6jalVdTj9ERblyOvBoelZfXQgevhywPsjJBAA&oe=6420DBC8",
    },
    {
        userName: "Nhat Khang",
        userTitle: "Worker",
        userAvt: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/296910304_3376011002622783_1623232303844231252_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=b4Kkrn5qgKIAX9vcg50&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfCLcvVagujZ1S5SyEFyOcK-ZqFeiEAkjbaU5lKEeQA3cw&oe=64220C79",
    },
    {
        userName: "Duc Hai",
        userTitle: "Worker",
        userAvt: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t1.6435-9/106509798_2721456038091583_4230355345151193495_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=u32gj3Aq5t8AX9TZNyz&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfBzwkXV17BxJVnfCOTiWOf3qr04mgyrcL6-49OA1SbiKw&oe=6443F14E"
    },
    {
        userName: "Mai Phuong",
        userTitle: "Worker",
        userAvt: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/325760923_575757253951348_2183855455904645228_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=P4lC907NT-IAX89Maio&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfDZrFxGpOApx9wAHp6seISCZRc4vHL_qDNjSfln86hn2g&oe=6421D9F9"
    },
    {
        userName: "Van Tung",
        userTitle: "Worker",
        userAvt: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/51979987_341568413128282_5470888801448493056_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=GJ-ctKSPyCgAX-tO0tS&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfCC5dCfYD3VCxC0Eb67ro5cJMFhp2JF8kilJWyCdKZIYA&oe=6443EF2C"
    },
    {
        userName: "Van Tung",
        userTitle: "Worker",
        userAvt: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/51979987_341568413128282_5470888801448493056_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=GJ-ctKSPyCgAX-tO0tS&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfCC5dCfYD3VCxC0Eb67ro5cJMFhp2JF8kilJWyCdKZIYA&oe=6443EF2C"
    },
    {
        userName: "Trong Hieu",
        userTitle: "Worker",
        userAvt: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/273478257_1291705351356294_4541559117734448310_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5-6-MGAVbaYAX86tUdl&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfCrfhH8O6jalVdTj9ERblyOvBoelZfXQgevhywPsjJBAA&oe=6420DBC8",
    },
    {
        userName: "Nhat Khang",
        userTitle: "Worker",
        userAvt: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/296910304_3376011002622783_1623232303844231252_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=b4Kkrn5qgKIAX9vcg50&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfCLcvVagujZ1S5SyEFyOcK-ZqFeiEAkjbaU5lKEeQA3cw&oe=64220C79",
    },
    {
        userName: "Duc Hai",
        userTitle: "Worker",
        userAvt: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t1.6435-9/106509798_2721456038091583_4230355345151193495_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=u32gj3Aq5t8AX9TZNyz&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfBzwkXV17BxJVnfCOTiWOf3qr04mgyrcL6-49OA1SbiKw&oe=6443F14E"
    },
    {
        userName: "Mai Phuong",
        userTitle: "Worker",
        userAvt: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/325760923_575757253951348_2183855455904645228_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=P4lC907NT-IAX89Maio&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfDZrFxGpOApx9wAHp6seISCZRc4vHL_qDNjSfln86hn2g&oe=6421D9F9"
    },
    {
        userName: "Van Tung",
        userTitle: "Worker",
        userAvt: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/51979987_341568413128282_5470888801448493056_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=GJ-ctKSPyCgAX-tO0tS&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfCC5dCfYD3VCxC0Eb67ro5cJMFhp2JF8kilJWyCdKZIYA&oe=6443EF2C"
    },
]
function taskAssignment() {
    return (
        <div className="TA--container">
            <form className="TA--search--container">
                <button className="TA--search--btn" type="submit">search</button>
                <input className="TA--search--input" type="search" placeholder="Search employee..." />
            </form>
            <div className="TA--worker">
                {
                    workerData.map(worker => {
                        return (
                            <div className="TA--worker--display">
                                <div className="TA--worker--info">
                                    <h2>{worker.userName}</h2>
                                    <h5>{worker.userTitle}</h5>
                                </div>
                                <img className="TA--worker--img" src={worker.userAvt}></img>
                                <button className="TA--worker--assign"><MdAddTask /></button>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default taskAssignment;