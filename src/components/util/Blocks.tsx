import {
    Landings,
    LandingsBlocks,
    Pages,
    PagesBlocks,
} from '../../../tina/__generated__/types'
import { AboutCards } from '../blocks/AboutCard'
import { AboveFold } from '../blocks/AboveFold'
import { FeaturedBlog } from '../blocks/BlogList'
import { Cards } from '../blocks/Cards'
import { Content } from '../blocks/Content'
import { FeatureFocus } from '../blocks/FeatureFocus'
import { FeatureFocusSimple } from '../blocks/FeatureFocusSimple'
import { Hero } from '../blocks/Hero'
import { Hero2Column } from '../blocks/Hero2Column'
import { HubqlDemoFile } from '../blocks/HubqlDemoFile'
import { ImageComponent } from '../blocks/Image'
import { ImageGallery } from '../blocks/ImageGallery'
import { Paragraph } from '../blocks/Paragraph'
import { ScrollCard } from '../blocks/ScrollCard'
import { SectionCta } from '../blocks/SectionCta'
import { SectionHeading } from '../blocks/SectionHeading'
import { TemplateApiReference } from '../blocks/TemplateApiReference'
import { TrustedBy } from '../blocks/TrustedBy'
import { Services } from '../blocks/Services'
import { VsHero } from '../blocks/VsHero'
import { ProductGrid } from '../blocks/ProductGrid'
import { WhyHubql } from '../blocks/WhyHubql'

type BlocksProps =
    | Omit<Pages, 'id' | '_sys' | '_values'>
    | Omit<Landings, 'id' | '_sys' | '_values'>
export const Blocks = (
    props: BlocksProps & {
        __typename: string
        blocks: (PagesBlocks | LandingsBlocks | null)[] | null
        posts?: any
    }
) => {
    return (
        <>
            {props.blocks
                ? props.blocks.map(function (block, i) {
                      return (
                          <div key={i}>
                              <Block
                                  block={block}
                                  collectionType={props.__typename}
                                  blockIndex={i}
                                  posts={
                                      block?.__typename ===
                                      'PagesBlocksFeaturedblog'
                                          ? props?.posts
                                          : []
                                  }
                              />
                          </div>
                      )
                  })
                : null}
        </>
    )
}

const Block = ({
    block,
    collectionType,
    blockIndex,
    posts,
}: {
    block: PagesBlocks | LandingsBlocks | any
    collectionType: any
    blockIndex: number
    posts?: any
}) => {
    switch (block.__typename) {
        case `${collectionType}BlocksScrollCard`:
            return <ScrollCard data={block} />
        case `${collectionType}BlocksHero`:
            return <Hero data={block} />
        case `${collectionType}BlocksHero2Column`:
            return <Hero2Column data={block} />
        case `${collectionType}BlocksFeaturefocus`:
            return <FeatureFocus data={block} />
        case `${collectionType}BlocksFeaturefocusSimple`:
            return <FeatureFocusSimple data={block} />
        case `${collectionType}BlocksSectionheading`:
            return <SectionHeading data={block} />
        case `${collectionType}BlocksCards`:
            return <Cards data={block} />
        case `${collectionType}BlocksSectionCta`:
            return <SectionCta data={block} />
        case `${collectionType}BlocksContent`:
            return <Content data={block} />
        case `${collectionType}BlocksGallery`:
            return <ImageGallery data={block} />
        case `${collectionType}BlocksFeaturedblog`:
            return <FeaturedBlog data={block} posts={posts} />
        case `${collectionType}BlocksTemplateApiReference`:
            return <TemplateApiReference data={block} />
        case `${collectionType}BlocksVshero`:
            return <VsHero data={block} />
        case `${collectionType}BlocksParagraph`:
            return <Paragraph data={block} />
        case `${collectionType}BlocksImage`:
            return <ImageComponent data={block} />
        case `${collectionType}BlocksAboutCards`:
            return <AboutCards data={block} blockIndex={blockIndex} />
        case `${collectionType}BlocksHubqlDemoFile`:
            return <HubqlDemoFile fileId={block?.fileId} />
        case `${collectionType}BlocksAboveFold`:
            return <AboveFold data={block}/>
        case `${collectionType}BlocksTrustedBy`:
            return <TrustedBy data={block}/>
        case `${collectionType}BlocksServices`:
            return <Services data={block}/>
        case `${collectionType}BlocksProductGrid`:
            return <ProductGrid data={block}/>
        case `${collectionType}BlocksWhyHubq`:
            return <WhyHubql data={block}/>
        default:
            return null
    }
}
