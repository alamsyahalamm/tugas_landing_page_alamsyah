import React from "react";
import { Button } from "flowbite-react";

function Contents() {
    return (
        <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 items-center lg:my-6 my-3" id="home">
                <div className="mx-6 lg:pe-12 text-justify lg:order-1 order-2">
                    <h1 className="text-[35px] mb-3 font-extrabold">Islamic Boarding School
                        SMK TI BAZMA</h1>
                    <p>
                        Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI BAZMA) merupakan sekolah unggulan berasrama yang diperuntukkan bagi anak-anak tidak mampu. Pembangunan sekolah, baik fasilitas maupun operasional didanai dari hasil pengelolaan wakaf dan sumber dana sosial kemanusiaan lainnya yang diamanahkan oleh masyarakat.
                    </p>
                    <div className="mt-4">
                        <Button color="blue">Selengkapnya</Button>
                    </div>
                </div>
                <div className="mt-4 lg:mt-0 order-1 lg:order-2 mx-6">
                    <video className="w-full rounded-xl" controls>
                        <source src="./src/mp4/1.mp4" type="video/mp4" />
                        <source src="mov_bbb.ogg" type="video/ogg" />
                        Your browser does not support HTML video.
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Contents