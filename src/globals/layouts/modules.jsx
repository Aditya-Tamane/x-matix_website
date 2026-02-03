import Button from '@/components/common/Button/button'
import { Cog6ToothIcon, CpuChipIcon } from '@heroicons/react/24/outline'
import React from 'react';
import '../../styles/modules.css';
import Outcomes from "@/components/common/outcomes/outcomes";
import RequestDemo from '@/components/RequestDemo';

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
                        <br /><br />
                        </span>
                    ))}
                </p>}

                <Button title='Request a Demo' type='primary' size='medium'/>
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

            <RequestDemo/>
        </>
    )
}
