import { exec as nodeExec } from 'teen_process';

/**
 * Optimized exec function for Bun.
 * Falls back to teen_process.exec when running on Node.js.
 */
export async function exec(
  cmd: string,
  args: string[] = [],
  opts: any = {}
): Promise<any> {
  if (globalThis.Bun) {
    const start = Date.now();
    const proc = Bun.spawn([cmd, ...args], {
      cwd: opts.cwd as string,
      env: opts.env as any,
      stdin: 'inherit',
    });

    const stdout = await new Response(proc.stdout).text();
    const stderr = await new Response(proc.stderr).text();
    const code = await proc.exited;

    if (code !== 0 && !opts.ignoreExitCode) {
      const err = new Error(`Command '${cmd} ${args.join(' ')}' exited with code ${code}`) as any;
      err.code = code;
      err.stdout = stdout;
      err.stderr = stderr;
      throw err;
    }

    return {
      stdout,
      stderr,
      code,
    };
  }

  // Fallback to original teen_process for Node.js
  return await nodeExec(cmd, args, opts);
}
