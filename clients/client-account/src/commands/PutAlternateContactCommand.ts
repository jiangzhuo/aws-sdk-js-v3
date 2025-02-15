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

import { AccountClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccountClient";
import { PutAlternateContactRequest } from "../models/models_0";
import {
  deserializeAws_restJson1PutAlternateContactCommand,
  serializeAws_restJson1PutAlternateContactCommand,
} from "../protocols/Aws_restJson1";

export interface PutAlternateContactCommandInput extends PutAlternateContactRequest {}
export interface PutAlternateContactCommandOutput extends __MetadataBearer {}

/**
 * <p>Modifies the specified alternate contact attached to an Amazon Web Services account.</p>
 *         <p>For complete details about how to use the alternate contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Access or
 *             updating the alternate contacts</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountClient, PutAlternateContactCommand } from "@aws-sdk/client-account"; // ES Modules import
 * // const { AccountClient, PutAlternateContactCommand } = require("@aws-sdk/client-account"); // CommonJS import
 * const client = new AccountClient(config);
 * const command = new PutAlternateContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAlternateContactCommandInput} for command's `input` shape.
 * @see {@link PutAlternateContactCommandOutput} for command's `response` shape.
 * @see {@link AccountClientResolvedConfig | config} for AccountClient's `config` shape.
 *
 */
export class PutAlternateContactCommand extends $Command<
  PutAlternateContactCommandInput,
  PutAlternateContactCommandOutput,
  AccountClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutAlternateContactCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccountClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAlternateContactCommandInput, PutAlternateContactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccountClient";
    const commandName = "PutAlternateContactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutAlternateContactRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutAlternateContactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutAlternateContactCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutAlternateContactCommandOutput> {
    return deserializeAws_restJson1PutAlternateContactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
