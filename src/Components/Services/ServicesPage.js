import React from "react";
import { Service, MainImg, Img, HeadLine, SubHead, Serv1, Serv2, Serv3, Icon, IInner, STitle, SDesc} from "./ServiceStyle";
import img from "./img/recycle-pallet.png";

function ServicePage() {
    return (
        <Service>
            <MainImg>
                <Img src= {img} />
            </MainImg>
            <HeadLine>What We Do</HeadLine>
            <SubHead>
                We improve safety, decrease product damage, enhance quality and find ways to reduce
                pallet expense for your customers. We find solutions for all your issues.
                Contact us to get started.
            </SubHead>
            <Serv1 className="roll-icon-box">
                <Icon className="icon">
                    <IInner className="fa fa-recycle"></IInner>
                </Icon>
                <STitle>Pallet Recycling</STitle>
                <SDesc>
                    We make a point to do our part as a business. We at Pallet Solutions believe that the retrieval, repair and reuse of the Earths natural products are the cornerstone of environmental awareness and we take great pride in that.
                </SDesc>
            </Serv1>
            <Serv2>
                <Icon className="icon">
                    <IInner className="fa fa-trash-o"></IInner>
                </Icon>
                <STitle>Pallet Removal </STitle>
                <SDesc>
                    We provide a solution for your pallet removal needs to silmply give you one less thing to worry about.
                </SDesc>
            </Serv2>
            <Serv3>
                <Icon className="icon">
                    <IInner className="fa fa-plus"></IInner>
                </Icon>
                <STitle>New and Custom-sized Pallets</STitle>
                <SDesc>
                    We offer a wide range of new pallets and skids to satisfy your specific need. With our customers in mind we do our best to provide the best option for our clients.
                </SDesc>
            </Serv3>
        </Service>
    )
}

export default ServicePage;