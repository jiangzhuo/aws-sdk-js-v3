// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  GetBehaviorModelTrainingSummariesRequest,
  GetBehaviorModelTrainingSummariesResponse,
} from "../models/models_1";
import {
  deserializeAws_restJson1GetBehaviorModelTrainingSummariesCommand,
  serializeAws_restJson1GetBehaviorModelTrainingSummariesCommand,
} from "../protocols/Aws_restJson1";

export interface GetBehaviorModelTrainingSummariesCommandInput extends GetBehaviorModelTrainingSummariesRequest {}
export interface GetBehaviorModelTrainingSummariesCommandOutput
  extends GetBehaviorModelTrainingSummariesResponse,
    __MetadataBearer {}

/**
 * <p>
 *       Returns a Device Defender's ML Detect Security Profile training model's status.
 *     </p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetBehaviorModelTrainingSummaries</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetBehaviorModelTrainingSummariesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetBehaviorModelTrainingSummariesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetBehaviorModelTrainingSummariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBehaviorModelTrainingSummariesCommandInput} for command's `input` shape.
 * @see {@link GetBehaviorModelTrainingSummariesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class GetBehaviorModelTrainingSummariesCommand extends $Command<
  GetBehaviorModelTrainingSummariesCommandInput,
  GetBehaviorModelTrainingSummariesCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBehaviorModelTrainingSummariesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBehaviorModelTrainingSummariesCommandInput, GetBehaviorModelTrainingSummariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "GetBehaviorModelTrainingSummariesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBehaviorModelTrainingSummariesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetBehaviorModelTrainingSummariesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetBehaviorModelTrainingSummariesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetBehaviorModelTrainingSummariesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetBehaviorModelTrainingSummariesCommandOutput> {
    return deserializeAws_restJson1GetBehaviorModelTrainingSummariesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
