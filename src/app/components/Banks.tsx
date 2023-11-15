import Binance from '../../../public/svgs/binance.svg'
import IBM from '../../../public/svgs/ibm.svg'
import PNC from '../../../public/svgs/pnc.svg'
import WorldBank from '../../../public/svgs/world-bank.svg'
import Stripe from '../../../public/svgs/stripe.svg'


const Banks = () => {
  return (<>
<section className="bg-white/[0.20] w-screen h-[5rem] flex pt-[1.5rem] pr-[2rem] align-center gap-[0.625rem]">
<img src={Binance} />
<img src={IBM} />
<img src={PNC} />
<img src={WorldBank} />
<img src={Stripe} />
    </section>
    </>
  )
}

export default Banks