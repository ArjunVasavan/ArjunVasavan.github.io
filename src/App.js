import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const commands = [
    'whoami',
    'cat skills.txt',
    'ls projects/',
    'cat contact.txt',
  ];

  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState(commands[0]);
  const [commandsIdx, setCommandsIdx] = useState(0);

  useEffect(() => {
    if (text && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  useEffect(() => {
    const revealText = () => {
      setIsVisible(true);
      setIdx(idx + 1);
      setCurrentText('');
      setCurrentIndex(0);
      setCommandsIdx(idx % 2 !== 0 ? commandsIdx : commandsIdx + 1);
      setText(commands[commandsIdx]);
    };
    const delay = 800 + idx * 200;
    const timeoutId = setTimeout(revealText, delay);
    return () => clearTimeout(timeoutId);
  }, [idx]);

  return (
    <div className="App">
      <div className="body">

        {/* whoami */}
        <div className="code-block">
          <div>
            <span id="a">arjun@archlinux</span>:<span id="b">~</span>
            <span id="c">$</span>
            <span id="z"> {idx === 0 ? currentText : commands[0]}</span>
          </div>
          {isVisible && idx >= 1 && (
            <div id="g" style={{ marginTop: '4px' }}>
              arjun vasavan
            </div>
          )}
        </div>

        {/* skills */}
        {isVisible && idx >= 2 && (
          <div className="code-block">
            <div>
              <span id="a">arjun@archlinux</span>:<span id="b">~</span>
              <span id="c">$</span>
              <span id="z"> {idx === 2 ? currentText : commands[1]}</span>
            </div>
            {isVisible && idx >= 3 && (
              <>
                <div className="code-block" id="w">
                  <div>==============</div>
                  <div>ROOT VARIABLES</div>
                  <div>==============</div>
                </div>
                <div className="code-block">
                  <span id="f">role</span>
                  <span id="z"> = "Embedded Systems Engineer"</span>
                </div>
                <div className="code-block">
                  <span id="f">education</span>
                  <span id="z"> = "B.Tech ECE, College of Engineering Chengannur (Jun 2025)"</span>
                </div>
                <div className="code-block">
                  <span id="f">languages</span>
                  <span id="z"> = ['C', 'C++']</span>
                </div>
                <div className="code-block">
                  <span id="f">embedded</span>
                  <span id="z"> = ['PIC18F4580', 'GPIO', 'UART', 'SPI', 'I2C', 'CAN', 'LCD']</span>
                </div>
                <div className="code-block">
                  <span id="f">systems</span>
                  <span id="z"> = ['Linux syscalls', 'IPC', 'TCP/UDP sockets', 'pThreads']</span>
                </div>
                <div className="code-block">
                  <span id="f">tools</span>
                  <span id="z"> = ['Vim', 'Neovim', 'GCC', 'GDB', 'Make', 'Git']</span>
                </div>
                <div className="code-block">
                  <span id="f">ds</span>
                  <span id="z"> = ['Linked Lists', 'Trees', 'Stacks', 'Hash Tables', 'Red-Black Trees']</span>
                </div>
              </>
            )}
          </div>
        )}

        {/* projects */}
        {isVisible && idx >= 4 && (
          <div className="code-block">
            <div>
              <span id="a">arjun@archlinux</span>:<span id="b">~</span>
              <span id="c">$</span>
              <span id="z"> {idx === 4 ? currentText : commands[2]}</span>
            </div>
            {isVisible && idx >= 5 && (
              <>
                <div className="code-block" id="w">
                  <div>====================</div>
                  <div>PROJECTS</div>
                  <div>====================</div>
                </div>

                <div className="code-block">
                  <div id="e" style={{ fontWeight: 'bold' }}>linux-remote-process-manager/</div>
                  <div id="op">
                    TCP-based remote process diagnostics tool — inspect memory, CPU, file descriptors
                    and ports of Linux processes on a remote machine. Lightweight remote htop.
                  </div>
                  <div id="w">stack: C · Linux System Programming · TCP Sockets · /proc FS · Signals</div>
                </div>

                <div className="code-block">
                  <div id="e" style={{ fontWeight: 'bold' }}>car-black-box-system/</div>
                  <div id="op">
                    PIC18F4580 automotive black box — logs speed, gear, timestamp and collision events
                    to EEPROM with circular buffer, 10 persistent entries across power cycles.
                  </div>
                  <div id="w">stack: Embedded C · PIC18F4580 · I2C · ADC · UART · DS1307 RTC</div>
                </div>

                <div className="code-block">
                  <div id="e" style={{ fontWeight: 'bold' }}>can-bus-communication/</div>
                  <div id="op">
                    CAN protocol between PIC18F4580 nodes for automotive data exchange (temp, speed)
                    with LCD real-time monitoring, node ID config and persistent storage.
                  </div>
                  <div id="w">stack: Embedded C · CAN Protocol · PIC18F4580 · Interrupts · LCD</div>
                </div>

                <div className="code-block">
                  <div id="e" style={{ fontWeight: 'bold' }}>tftp-implementation/</div>
                  <div id="op">
                    UDP-based TFTP from scratch per RFC 1350 — file upload/download with opcode
                    processing, block numbering, ACK sync and termination logic.
                  </div>
                  <div id="w">stack: C · UDP Sockets · Linux syscalls · Network Protocol Design</div>
                </div>

                <div className="code-block">
                  <div id="e" style={{ fontWeight: 'bold' }}>minishell/</div>
                  <div id="op">
                    Unix-like interactive shell — internal and external commands, parsing, process
                    creation, piping and I/O redirection.
                  </div>
                  <div id="w">stack: C · Process Management · Signals · System Calls</div>
                </div>

                <div className="code-block">
                  <div id="e" style={{ fontWeight: 'bold' }}>red-black-tree/</div>
                  <div id="op">
                    Self-balancing Red-Black Tree in C — insertion, deletion, search and min/max at
                    guaranteed O(log n) via rotations and color-based balancing.
                  </div>
                  <div id="w">stack: C · Data Structures · Dynamic Memory Allocation</div>
                </div>

                <div className="code-block">
                  <div id="e" style={{ fontWeight: 'bold' }}>c-to-html-syntax-highlighter/</div>
                  <div id="op">
                    C source to HTML converter — FSM-based tokenizer classifying comments, strings,
                    preprocessor directives, keywords and numbers into syntax-highlighted HTML.
                  </div>
                  <div id="w">stack: C · FSM · Tokenization · File I/O · Function Pointers</div>
                </div>
              </>
            )}
          </div>
        )}

        {/* contact */}
        {isVisible && idx >= 6 && (
          <div className="code-block">
            <div>
              <span id="a">arjun@archlinux</span>:<span id="b">~</span>
              <span id="c">$</span>
              <span id="z"> {idx === 6 ? currentText : commands[3]}</span>
            </div>
            {isVisible && idx >= 7 && (
              <>
                <div className="code-block" id="w">
                  <div>================</div>
                  <div>EXPERIENCE</div>
                  <div>================</div>
                </div>
                <div className="code-block">
                  <div id="z">
                    [Jun 2025 – Present] <b>Embedded Systems Trainee</b>,{' '}
                    <span id="link">
                      <a href="https://emertxe.com" target="_blank" rel="noreferrer">
                        Emertxe Information Technologies
                      </a>
                    </span>
                  </div>
                  <div id="op" style={{ marginTop: '4px' }}>
                    Spot Award for Outstanding Performance — Oct 2025
                  </div>
                </div>

                <div className="code-block" id="w">
                  <div>================</div>
                  <div>RÉSUMÉ</div>
                  <div>================</div>
                  <div id="z">
                    <a href="/resume.pdf" target="_blank" rel="noreferrer">resume.pdf</a>
                  </div>
                </div>

                <div className="code-block" id="w">
                  <div>================</div>
                  <div>CONTACT</div>
                  <div>================</div>
                  <div id="z">
                    [<span id="link"><a href="https://github.com/ArjunVasavan" target="_blank" rel="noreferrer">github</a></span>]
                    {' '}[<span id="link"><a href="https://linkedin.com/in/arjun-vasavan" target="_blank" rel="noreferrer">linkedin</a></span>]
                    {' '}[<span id="link"><a href="https://leetcode.com/u/ArjunVasavan" target="_blank" rel="noreferrer">leetcode</a></span>]
                    {' '}[<span id="link"><a href="mailto:vasavanarjun@gmail.com">mail</a></span>]
                  </div>
                </div>
              </>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
