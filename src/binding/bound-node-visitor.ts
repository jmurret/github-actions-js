/*!
 * Copyright 2019 Omar Tawfik. Please see LICENSE file at the root of this repository.
 */

import {
  BaseBoundNode,
  BoundKind,
  BoundDocument,
  BoundVersion,
  BoundWorkflow,
  BoundAction,
  BoundOn,
  BoundResolves,
  BoundUses,
  BoundNeeds,
  BoundRuns,
  BoundArgs,
  BoundEnv,
  BoundSecrets,
} from "./bound-nodes";
import { BaseSyntaxNode } from "../parsing/syntax-nodes";

export abstract class BoundNodeVisitor {
  protected visit(node: BaseBoundNode<BaseSyntaxNode>): void {
    switch (node.kind) {
      case BoundKind.Document: {
        return this.visitDocument(node as BoundDocument);
      }
      case BoundKind.Version: {
        return this.visitVersion(node as BoundVersion);
      }
      case BoundKind.Workflow: {
        return this.visitWorkflow(node as BoundWorkflow);
      }
      case BoundKind.Action: {
        return this.visitAction(node as BoundAction);
      }
      case BoundKind.On: {
        return this.visitOn(node as BoundOn);
      }
      case BoundKind.Resolves: {
        return this.visitResolves(node as BoundResolves);
      }
      case BoundKind.Uses: {
        return this.visitUses(node as BoundUses);
      }
      case BoundKind.Needs: {
        return this.visitNeeds(node as BoundNeeds);
      }
      case BoundKind.Runs: {
        return this.visitRuns(node as BoundRuns);
      }
      case BoundKind.Args: {
        return this.visitArgs(node as BoundArgs);
      }
      case BoundKind.Env: {
        return this.visitEnv(node as BoundEnv);
      }
      case BoundKind.Secrets: {
        return this.visitSecrets(node as BoundSecrets);
      }
      default: {
        throw new Error(`Unexpected bound kind: '${node.kind}'`);
      }
    }
  }

  protected visitDocument(node: BoundDocument): void {
    return this.visitDefault(node);
  }

  protected visitVersion(node: BoundVersion): void {
    return this.visitDefault(node);
  }

  protected visitWorkflow(node: BoundWorkflow): void {
    return this.visitDefault(node);
  }

  protected visitAction(node: BoundAction): void {
    return this.visitDefault(node);
  }

  protected visitOn(node: BoundOn): void {
    return this.visitDefault(node);
  }

  protected visitResolves(node: BoundResolves): void {
    return this.visitDefault(node);
  }

  protected visitUses(node: BoundUses): void {
    return this.visitDefault(node);
  }

  protected visitNeeds(node: BoundNeeds): void {
    return this.visitDefault(node);
  }

  protected visitRuns(node: BoundRuns): void {
    return this.visitDefault(node);
  }

  protected visitArgs(node: BoundArgs): void {
    return this.visitDefault(node);
  }

  protected visitEnv(node: BoundEnv): void {
    return this.visitDefault(node);
  }

  protected visitSecrets(node: BoundSecrets): void {
    return this.visitDefault(node);
  }

  private visitDefault(node: BaseBoundNode<BaseSyntaxNode>): void {
    node.children.forEach(child => {
      this.visit(child);
    });
  }
}