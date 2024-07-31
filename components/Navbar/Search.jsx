"use client";

import { useOnClickOutside } from "@/app/hooks/use-click-outside";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import debounce from "lodash.debounce";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useCallback, useRef, useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";

const Search = () => {
  const [input, setInput] = useState("");
  const {
    data: queryResults,
    refetch,
    isFetched,
  } = useQuery({
    queryFn: async () => {
      if (!input) return [];
      const { data } = await axios(`/api/search?q=${input}`);
      return data;
    },
    queryKey: ["search-query"],
    enabled: false,
  });

  const router = useRouter();
  const commandRef = useRef(null);
  const pathname = usePathname();

  useOnClickOutside(commandRef, () => {
    setInput("");
  });

  const request = debounce(() => {
    refetch();
  });

  const debounceRequest = useCallback(() => {
    request();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setInput("");
  }, [pathname]);
  return (
    <Command ref={commandRef}>
      <CommandInput
        value={input}
        onValueChange={(text) => {
          setInput(text);
          debounceRequest();
        }}
        placeholder="Search ekoe brand"
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <span>Launch</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default Search;
