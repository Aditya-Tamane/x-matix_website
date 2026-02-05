import Button from '@/components/common/Button/button'
import { AdjustmentsVerticalIcon, ArrowDownTrayIcon, ClipboardDocumentIcon, Cog6ToothIcon, CpuChipIcon, DocumentIcon, VideoCameraIcon } from '@heroicons/react/24/outline'
import React from 'react';
import '../../styles/modules.css';
import Outcomes from "@/components/common/outcomes/outcomes";
import RequestDemo from '@/components/common/requestDemo/RequestDemo';
import Image from 'next/image';

export default function modules(props) {
    const { data } = props;
    return (
        <>
            <section className='hero-section'>
                <h5 className="eyebrow-text"><CpuChipIcon width={18.75} height={18.75} /> {data.hero.title}</h5>
                <h1 className="hero-main-heading">
                    {data?.hero?.mainHeading?.map(e => (
                        <span key={e?.index} style={{color: e.color}}>{e.heading}</span>
                    ))}
                </h1>
                {data?.hero.description1 && <p className="hero-card-description1">
                    {data.hero.description1}
                </p>}
                {data?.hero.description2 && <p className="hero-card-description2">
                    {data.hero.description2.split('\n').map((line, index) => (
                        <span key={index}>
                            {line}
                            <br />
                        </span>
                    ))}
                </p>}
                <div className="hero-buttons-container">
                    <Button title='Request a Demo' type='primary' size='medium' hasIcon={true} icon={<ArrowDownTrayIcon width={18} height={18} className="icon-rotate"/>} />
                    <Button title='See how it works' type='secondary' size='medium' hasIcon={true} icon={<VideoCameraIcon width={18} height={18}/>}/>
                </div>
            </section>

            <section>
                <div className="heading-wrapper">
                    <h5 className="heading-title"><ClipboardDocumentIcon width={18.75} height={18.75} /> {data.howWeHelp.title}</h5>
                    <h2 className="main-heading">
                        {data?.howWeHelp?.mainHeading?.map((e, i) => {
                            return <span key={i} style={{color: e?.color}}>{e?.heading}</span>
                        })}
                    </h2>
                </div>
                <div className="howWeHelp-cards-wrapper">
                    {data?.howWeHelp?.cardsData?.map((e, idx)=>{
                        return (
                            <div key={idx} className='howWeHelp-card'>
                                <h5 className="heading-title">{idx == 0 ? <DocumentIcon width={24} height={24} /> : <AdjustmentsVerticalIcon width={24} height={24} />} {e.title}</h5>
                                <p className="description">{e.content}</p>
                                <ul>
                                    {e?.list?.map((list, i) => {
                                        return <li key={i} className='description'>{list}</li>
                                    })}
                                </ul>
                                <Button title='View more' hasIcon={true} size='medium' type='secondary'/>
                                <Image
                                    src={e.imageSrc}
                                    alt={e.imageAlt}
                                    width={300}
                                    height={200}
                                    style={{width: '100%', height: 'auto'}}
                                />
                            </div>
                        )
                    })}
                </div>
            </section>

            <section>
                <div className="heading-wrapper text-center">
                <h5 className="heading-title"><Cog6ToothIcon width={18.75} height={18.75} /> {data.keyCapabilities?.title}</h5>
                <h2 className="main-heading">
                    {data.keyCapabilities?.mainHeading?.map(e => (
                    <span key={e?.index} style={{color: e.color}}>{e.heading}</span>
                    ))}
                </h2>
                <p className="description">{data?.keyCapabilities?.description2}</p>
                </div>
                <Outcomes data={data.keyCapabilities.cardsData}/>
            </section>

            <RequestDemo data={data.requestADemo}/>
        </>
    )
}
