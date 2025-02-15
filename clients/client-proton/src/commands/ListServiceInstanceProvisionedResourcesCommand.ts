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

import {
  ListServiceInstanceProvisionedResourcesInput,
  ListServiceInstanceProvisionedResourcesOutput,
} from "../models/models_0";
import {
  deserializeAws_json1_0ListServiceInstanceProvisionedResourcesCommand,
  serializeAws_json1_0ListServiceInstanceProvisionedResourcesCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

export interface ListServiceInstanceProvisionedResourcesCommandInput
  extends ListServiceInstanceProvisionedResourcesInput {}
export interface ListServiceInstanceProvisionedResourcesCommandOutput
  extends ListServiceInstanceProvisionedResourcesOutput,
    __MetadataBearer {}

/**
 * <p>List provisioned resources for a service instance with details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListServiceInstanceProvisionedResourcesCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListServiceInstanceProvisionedResourcesCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const command = new ListServiceInstanceProvisionedResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServiceInstanceProvisionedResourcesCommandInput} for command's `input` shape.
 * @see {@link ListServiceInstanceProvisionedResourcesCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 */
export class ListServiceInstanceProvisionedResourcesCommand extends $Command<
  ListServiceInstanceProvisionedResourcesCommandInput,
  ListServiceInstanceProvisionedResourcesCommandOutput,
  ProtonClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListServiceInstanceProvisionedResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListServiceInstanceProvisionedResourcesCommandInput,
    ListServiceInstanceProvisionedResourcesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "ListServiceInstanceProvisionedResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListServiceInstanceProvisionedResourcesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListServiceInstanceProvisionedResourcesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListServiceInstanceProvisionedResourcesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0ListServiceInstanceProvisionedResourcesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListServiceInstanceProvisionedResourcesCommandOutput> {
    return deserializeAws_json1_0ListServiceInstanceProvisionedResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
