export interface IBaseFormProps {
  maxImagesCount: () => (images: { rawFile: File }[]) => string | undefined
  type?: string
  handleSelectType?: (e: unknown) => void
}
