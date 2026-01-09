import React from 'react'

const CoopleHelps_6 = () => {
    return (
        <section className="bg-[#fdf3f5]">
            <div className="max-w-7xl mx-auto md:p-20 p-10">

                <h2 className='flex justify-center text-2xl font-semibold md:text-4xl'>Coople helps you build a stronger, more responsive workforce – shift by shift.</h2>

                <div className='grid sm:grid-cols-2 gap-5 md:grid-cols-3 justify-center '>

                    <div className='md:mt-7 mt-4'>
                        <img className='w-[280px]' src="https://images.prismic.io/coople/aF2563fc4bHWixFY_profitable-ch.png?auto=format%2Ccompress&fit=max&w=2048" alt="" />
                        <h2 className='text-2xl'>Profitability through precision.</h2>
                        <p className='text-sm text-justify '>Only pay for the staff you need – no more, no less. Coople helps align labour costs with actual demand.</p>
                    </div>
                    <div className='md:mt-7 mt-4'>
                        <img className='w-[280px]' src="https://images.prismic.io/coople/aF256Xfc4bHWixFW_better-workers.png?auto=format%2Ccompress&fit=max&w=2048" alt="" />
                        <h2 className='text-2xl'>Better workers. Better output.</h2>
                        <p className='text-sm text-justify '>Build structured talent pools, rehire top performers, and boost shift productivity with familiar faces.</p>
                    </div>
                    <div className='md:mt-7 mt-4'>
                        <img className='w-[280px]' src="https://images.prismic.io/coople/aF256nfc4bHWixFX_one-platform.png?auto=format%2Ccompress&fit=max&w=2048" alt="" />
                        <h2 className='text-2xl'>One platform. Full control.</h2>
                        <p className='text-sm text-justify '>Plan, hire and manage flexible workers – internal and external – from one place. No barriers, no blind spots.</p>
                    </div>

                </div>

                <div className='flex justify-center mt-10 '>
                    <button className='btn-primary px-16 py-3 text-sm'>
                        Get started
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CoopleHelps_6