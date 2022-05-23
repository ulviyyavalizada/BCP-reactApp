import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumbs'
import IndexForm from '../../components/homeSub/IndexForm'
import MapContainer from '../../components/contactSub/Map'
import translate from "../../i18n/translate";

export default function Contact() {
    return (
        <>
            <section className='contact'>
                <div className='container'>
                    <div className='row'>
                        <Breadcrumb currentPage={translate('Bizimlə əlaqə')}/>
                        <div className="mutual_section_heading">
                            <p>{translate('Bizimlə əlaqə')}</p>
                        </div>
                        <IndexForm/>
                        <div className='contact_map'>
                            <MapContainer/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
