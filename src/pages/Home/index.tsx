import { useContext } from 'react'

import { ChartContext } from '../../contexts/ChartContext'

import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import CoffeBanner from '../../assets/banner-coffe.svg'
import { CoffeCard } from '../../components/CoffeCard'
import {
  BannerLeft,
  BoxCoffeCard,
  CoffeListContainer,
  HomeBanner,
  HomeContainer,
  IconInfo,
  InfoContent,
  TitleCoffeListContainer,
  TitleText,
} from './styles'

import { CoffeList } from '../../lib/coffeList'

export function Home() {
  const { shoppingChart } = useContext(ChartContext)

  return (
    <HomeContainer>
      <HomeBanner>
        <BannerLeft>
          <TitleText>
            <h1>Encontre o café perfeito para qualquer hora do dia.</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora.
            </p>
          </TitleText>
          <InfoContent>
            <div>
              <p>
                <IconInfo iconColor="yellowDark">
                  <ShoppingCart size={16} weight="fill" />
                </IconInfo>
                Compra simples e segura.
              </p>
              <p>
                <IconInfo iconColor="yellow">
                  <Timer size={16} weight="fill" />
                </IconInfo>
                Entrega rápida e rastreada.
              </p>
            </div>
            <div>
              <p>
                <IconInfo iconColor="baseText">
                  <Package size={16} weight="fill" />
                </IconInfo>
                Embalagem mantém o café intacto.
              </p>
              <p>
                <IconInfo iconColor="purple">
                  <Coffee size={16} weight="fill" />
                </IconInfo>
                O café chega fresquinho até você.
              </p>
            </div>
          </InfoContent>
        </BannerLeft>
        <img
          src={CoffeBanner}
          alt="Banner com copo de café e grãos de café ao redor"
        />
      </HomeBanner>
      <CoffeListContainer>
        <TitleCoffeListContainer>Nossos cafés</TitleCoffeListContainer>
        <BoxCoffeCard>
          {CoffeList.map((coffe) => {
            return (
              <CoffeCard
                key={coffe.id}
                id={coffe.id}
                name={coffe.name}
                description={coffe.description}
                price={coffe.price}
                classification={coffe.classification}
                image={coffe.image}
              />
            )
          })}
        </BoxCoffeCard>
      </CoffeListContainer>
    </HomeContainer>
  )
}
