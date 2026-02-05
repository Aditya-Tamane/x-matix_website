"use client";
import Image from 'next/image'
import './section-card.css'

export default function SectionCard({data={}, buttons=<></>, inverse = false, titleIcon=null}) {
    return (
        <section>
            <div className={`section-card-wrapper ${inverse && 'flex-reverse'}`}>
                <div className="section-left-card">
                    <h5 className="section-card-title">
                        {titleIcon && titleIcon}
                        {data?.title}
                    </h5>
                    <h2 className="section-card-heading">
                        <span className='heading-plane'>{data?.headingPlane1}</span>
                        <span className='heading-colored'> {data?.headingColored1}</span>
                        <span className='heading-plane'> {data?.headingPlane2}</span>
                        <span className='heading-colored'> {data?.headingColored2}</span>
                    </h2>
                    {data?.description1 && <p className="section-card-description1">
                        {data.description1}
                    </p>}
                    {data?.description2 && <p className="section-card-description2">
                        {data.description2.split('\n').map((line, index) => (
                            <span key={index}>
                            {line}
                            <br />
                            </span>
                        ))}
                    </p>}
                    {buttons && <div className="section-buttons-container">
                        {buttons}
                    </div>}
                </div>
                <div className="section-right-card">
                    <Image
                        src={data?.imageSrc}
                        alt={data?.imageAlt}
                        className="card-image"
                        loading="lazy"
                        width={400}
                        height={300}
                        style={{ width: "100%", height: "auto", aspectRatio: 3/2 }}
                    />
                </div>
            </div>
        </section>
    )
}