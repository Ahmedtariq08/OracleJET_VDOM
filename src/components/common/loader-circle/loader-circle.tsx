import { Constants } from "../../../json/JsonHandler";
type Props = {
  loaderText?: string;
}

/**
 * @description "A loading circle to show to user during background processes / API Calls."
*/
export const LoaderCircle = (props: Props) => {
    const {loaderText = Constants.MESSAGES.FETCHING_DATA} = props;
    return (
      <div>
        <br></br>
        <div id="loader" class="loader-center">
          <oj-progress-circle id="progressCircle" value={-1} size='sm'></oj-progress-circle>
          <div class="oj-sm-margin-4x-vertical"></div>&nbsp;&nbsp;
          <oj-label-value>
            <oj-label slot="label" label-id="status">{loaderText}</oj-label>
            <div slot="value" id="loadingRegion" aria-labelledby="status" aria-busy="true"
              aria-describedby="progressCircle">
            </div>
          </oj-label-value>
        </div>
    </div>
    )
}
