import type { Meta, StoryObj } from '@storybook/react';
declare const StoryComponent: ({ url, width, height, linkText, captioned, placeholderImageUrl, placeholderSpinner, placeholderSpinnerDisabled, placeholderProps, embedPlaceholder, placeholderDisabled, scriptLoadDisabled, retryDelay, retryDisabled, igVersion, frame, debug, ...divProps }: import("../../components/embeds/InstagramEmbed").InstagramEmbedProps) => JSX.Element;
declare const meta: Meta<typeof StoryComponent>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const MainExample: Story;
export declare const MainExampleWithCaptions: Story;
export declare const FluidWidth: Story;
export declare const Width328AtMin: Story;
export declare const Width400: Story;
export declare const Width600: Story;
export declare const Width800: Story;
export declare const Width150AtUnderMin: Story;
export declare const Width50Percent: Story;
export declare const Width100Percent: Story;
export declare const UrlOnly: Story;
export declare const WithPlaceholderImage: Story;
export declare const CustomPlaceholder: Story;
export declare const CustomPlaceholderLinkText: Story;
export declare const PlaceholderSpinnerDisabled: Story;
export declare const PlaceholderDisabled: Story;
